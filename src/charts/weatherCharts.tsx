import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type WeatherRecord from "../types/weathertype";
import { useMemo } from "react";

function windowRows(records: WeatherRecord[], ms: number): WeatherRecord[] {
  if (records.length === 0) return [];
  const cutoff = records[records.length - 1].date.getTime() - ms;
  return records.filter((r) => r.date.getTime() > cutoff);
}

const DAY = 24 * 60 * 60 * 1000;
const HOUR = 60 * 60 * 1000;

type Range = 'day' | 'week' | 'month';

// How far back each range looks (Infinity = whole file)
const RANGE_MS: Record<Range, number> = { day: DAY, week: 7 * DAY, month: Infinity };

// Month view is averaged into hourly buckets; day/week keep the 5-minute rows
const BUCKET_MS: Record<Range, number> = { day: 0, week: 0, month: HOUR };

interface Point { ts: number; value: number | null }

const isNum = (v: unknown): v is number =>
  typeof v === 'number' && Number.isFinite(v);

function buildSeries(records: WeatherRecord[], key: string, range: Range): Point[] {
  const rows = windowRows(records, RANGE_MS[range]);
  const bucket = BUCKET_MS[range];

  // No bucketing: one point per row. Bad values become null so the line shows a gap.
  if (!bucket) {
    return rows.map((r) => ({
      ts: r.date.getTime(),
      value: isNum(r[key]) ? (r[key] as number) : null,
    }));
  }

  // Bucketing: group valid values by time slot, then average each slot
  const buckets = new Map<number, number[]>();
  for (const r of rows) {
    const v = r[key];
    if (!isNum(v)) continue;
    const t = Math.floor(r.date.getTime() / bucket) * bucket;
    const list = buckets.get(t);
    if (list) list.push(v);
    else buckets.set(t, [v]);
  }
  return [...buckets]
    .sort((a, b) => a[0] - b[0])
    .map(([ts, vals]) => ({ ts, value: vals.reduce((a, b) => a + b, 0) / vals.length }));
}

interface Props {
  records: WeatherRecord[];
  dataKey: string;   
  label: string;     
  unit: string;      
  range: Range;
}

export function WeatherChart({ records, dataKey, label, unit, range }: Props) {
  const data = useMemo(
    () => buildSeries(records, dataKey, range),
    [records, dataKey, range]
  );

  return (
    <div>
      <h3>{label} ({range})</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="ts"
            type="number"
            scale="time"
            domain={['dataMin', 'dataMax']}
            tickFormatter={(t) =>
              new Date(t).toLocaleString([], {
                month: 'numeric', day: 'numeric',
                hour: range === 'month' ? undefined : 'numeric',
                timeZone: 'UTC',
              })
            }
          />
          <YAxis unit={unit} domain={['auto', 'auto']} />
          <Tooltip
            labelFormatter={(t) => new Date(t as number).toLocaleString([], { timeZone: 'UTC' })}
            formatter={(v) => [`${Number(v).toFixed(2)} ${unit}`, label]}
          />
          <Line
            type="monotone"
            dataKey="value"
            dot={false}
            connectNulls={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}