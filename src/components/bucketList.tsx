"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase/supabase";

function BucketsList() {
    const [buckets, setBuckets] = useState<any[]>([]);

    useEffect(() => {
        const fetchBuckets = async () => {
            const { data, error } = await supabase.storage.listBuckets();
            if (error) {
                console.error("Erreur :", error);
            } else {
                setBuckets(data);
            }
        };

        fetchBuckets();
    }, []);

    return (
        <div>
            <h2>Liste des Buckets</h2>
            <ul>
                {buckets.map((bucket) => (
                    <li key={bucket.id}>{bucket.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default BucketsList;
