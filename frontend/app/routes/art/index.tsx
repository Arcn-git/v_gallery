import { Outlet } from "remix";
import UploadArt from "./uploadArt";

export default function ArtRoute() {
    return (
        <div>
            <h1>Art</h1>
            <main>
                <Outlet />
                <UploadArt />
            </main>
        </div>
    );
}