import Link from "next/link";

const SubNav = ({ navItem, position }) => {
  return (
    <div className="sub-nav">
      <p className="sub-title">{navItem.title}</p>
      <ul className="sub-items" style={{ left: `calc(${position}px - 10px)` }}>
        {navItem.children.map((child) => {
          return (
            <li key={child.id}>
              <Link href={child.url}>{child.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default SubNav;
