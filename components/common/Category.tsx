export default function Category() {
  return (
    <div className="w-full flex justify-center bg-white mt-12 fixed top-4 z-30 max-w-md">
      <ul className="menu menu-horizontal bg-base-100">
        <li>
          <a>한식</a>
        </li>
        <li>
          <a>일식</a>
        </li>
        <li>
          <a>중식</a>
        </li>
        <li>
          <a>분식</a>
        </li>
        <li>
          <a>양식</a>
        </li>
        <li>
          <a>포차</a>
        </li>
      </ul>
    </div>
  );
}