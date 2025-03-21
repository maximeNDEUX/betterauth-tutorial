import BucketsList from "@/components/bucketList";
import { Button } from "@/components/ui/button";

export default function DashBoardPage() {
    return (
        <div>
            <h1 className="text-2xl">Edit Profile page</h1>
            <h2 className="text-xl">Profile picture</h2>

            <BucketsList />
        </div>
    );
}
