import { useAllDiscounts } from "../../../../hooks/useAllDiscounts";

const AllDiscounts = ({ token }) => {
  const { data, isLoading, error } = useAllDiscounts(token);

  if (isLoading) return <p>Loading discount...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const discount = data?.data;

  if (!discount) {
    return <p>No discount available.</p>;
  }

  return (
    <div className="bg-[#e8f7eb] mt-[40px] pt-[10px] p-[10px]">
      <h2 className="text-green-700 font-semibold text-[30px] text-center">
        {discount.title}
      </h2>
      <p className="text-center font-bold mt-[10px] text-[20px]">
        {" "}
        Up To: {discount.discoount_up_to}%
      </p>
      <img
        src={discount.poster_image_url}
        alt={discount.title}
        style={{ width: "300px" }}
      />
    </div>
  );
};

export default AllDiscounts;
