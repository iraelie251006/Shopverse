import Stars from "../Stars";
import { Card, CardContent } from "../../ui/card";

import { Review } from "@prisma/client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ReviewView({review}: {review: Review}) {
  const initials = review.name.split(" ").map((word) => word[0].toUpperCase()).join("");
  return (
    <Card>
      <CardContent className="grid gap-4 p-4">
        <div className="flex items-center gap-4">
          <Avatar>
            <AvatarImage alt="@jaredpalmer" src="/placeholder-avatar.jpg" />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold">{review.name}</h3>
            <div className="flex items-center gap-0.5">
              <Stars rating={review.rating} />
            </div>
          </div>
        </div>
        <p>
          {review.content}
        </p>
        <p>
          <span className="font-semibold">Posted on:</span> {new Date(review.createdAt).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
          })}
        </p>
      </CardContent>
    </Card>
  );
}
