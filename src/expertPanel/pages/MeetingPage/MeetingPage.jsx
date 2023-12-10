import { useLocation } from "react-router-dom";
import Navbar from "../../../studentPanel/components/Navbar";
export default function MeetingPage() {
  const location = useLocation();
  const calendlyLink = location.state?.calendlyLink;

  if (!calendlyLink) return <p>Invalid link!</p>;

  return (
    <div className="py-4">
      <Navbar />
      <div className="h-screen w-2/3 mt-20 mx-auto">
        <iframe
          style={{ height: "100%", width: "100%" }}
          src={calendlyLink}
          title={calendlyLink}
        />
      </div>
    </div>
  );
}
