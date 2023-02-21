export default function Category() {
  return (
    <div className="w-full justify-center bg-white mt-12 fixed top-4 z-30 max-w-md overflow-auto">
      <ul className="menu menu-horizontal bg-base-100">
        <li>
          <a>한식</a>
        </li>
        <li>
          <a>일식/돈가스</a>
        </li>
        <li>
          <a>중화요리</a>
        </li>
        <li>
          <a>분식</a>
        </li>
        <li>
          <a>양식</a>
        </li>
        <li>
          <a>고기/구이</a>
        </li>
        <li>
          <a>포차/주점</a>
        </li>
        <li>
          <a>카페/디저트</a>
        </li>
      </ul>
    </div>
  );
}
