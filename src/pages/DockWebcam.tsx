
export default function DockWebcam() {
    return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Title of the page */}
        <div className="mt-6 mb-3 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Underwater Dock Webcam
          </h1>
        </div>

        {/* The Underwater Dock Webcam Youtube video itself */}
        <div className="aspect-video w-full overflow-hidden rounded-lg shadow-lg">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/_hg-GqSFD8A?autoplay=1"
            title="Underwater Dock Webcam"
            allowFullScreen
          />
        </div>

        {/* Description of the webcam */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900">
            About This Camera
          </h1>

          <p className="mt-3 text-gray-700 leading-relaxed">
            This camera is mounted one meter above the bottom of the Yaquina Estuary 
            at OSU's Hatfield Marine Science Center dock in Newport, OR. In view are 
            the sandbag anchors for the Coastal Monitoring Station water quality instrument 
            package. Guests at our HMSC Visitor Center may zoom and pan the camera view, and 
            turn an LED light on and off. 

            This camera's waterproof housing system was designed and built in the HMSC iLab.
          </p>

          <p className="mt-3 text-gray-700 leading-relaxed italic">
            Description sourced from: https://webcam.oregonstate.edu/krabby
          </p>
        </div>

      </div>
    </div>
  );

}