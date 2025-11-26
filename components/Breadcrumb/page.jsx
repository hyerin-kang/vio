import Link from "next/link";

const page = ({ data }) => {
  return (
    <div className="breadcrumb">
      {data.map((item, index) => (
        <Link href={item.link} key={index}>
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default page;
