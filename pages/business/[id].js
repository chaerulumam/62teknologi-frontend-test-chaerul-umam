import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { SkeletonDetail } from "@/components/Skeleton";

const BusinessDetail = () => {
  const router = useRouter();
  const id = router.query.id;

  const [detail, setDetail] = useState({ data: {}, loading: true });
  const [review, setReview] = useState({ data: [], loading: true });

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const respon = await fetch(`/api/businesses/${id}`);
        const result = await respon.json();
        setDetail({ data: result.data, loading: false });
      } catch (error) {
        setDetail({ error: "Oop! There is something wrong", loading: false });
      }
    };

    const fetchReview = async () => {
      try {
        const respon = await fetch(`/api/businesses/${id}/reviews?limit=10`);
        const result = await respon.json();
        // console.log(result);
        setReview({ data: result.data?.reviews || [], loading: false });
      } catch (error) {
        setReview({ error: "Oop! There is something wrong", loading: false });
      }
    };

    if (id) {
      fetchDetail();
      fetchReview();
    }
  }, [id]);

  if (detail.loading || review.loading) {
    return <SkeletonDetail isLoading={true} count={1} />;
  }

  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg flex flex-col justify-center items-center">
      <div className="flex justify-center mb-4">
        <img
          className="w-full h-full object-cover"
          src={detail.data.image_url}
          alt={detail.data.name}
        />
      </div>
      <div className="px-6 py-4 text-center">
        <div className="font-bold text-black text-xl mb-2">
          {detail.data.name}
        </div>
        <p className="text-gray-700 text-base">
          Phone: {detail.data.display_phone} <br />
          Review Count: {detail.data.review_count} <br />
          Rating: {detail.data.rating} <br />
          Price: {detail.data.price}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <h2 className="text-xl text-black font-semibold">Categories</h2>
        <div className="flex flex-wrap justify-center">
          {detail.data.categories.map((category, index) => (
            <span
              key={index}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {category.title}
            </span>
          ))}
        </div>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <h2 className="text-xl text-black font-semibold">Location</h2>
        <p className="text-gray-700">
          {detail.data.location.address1}, {detail.data.location.city},{" "}
          {detail.data.location.state} {detail.data.location.zip_code}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 text-center">
        <h2 className="text-xl text-black font-semibold">Reviews</h2>

        {review.data?.map((item, index) => (
          <div key={index} className="bg-gray-200 rounded p-2 mb-2">
            <p className="font-semibold">{item.user.name}</p>
            <p>Rating: {item.rating}</p>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BusinessDetail;
