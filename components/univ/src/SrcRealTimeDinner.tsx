import { Src } from "@/types/store";

type Props = {
  src: Src;
};

export default function SrcRealTimeDinner({ src }: Props) {
  if (!src) return null;
  return (
    <div className="w-4/5 m-auto mt-4 shadow-xl card bg-base-100">
      <div className="card-body">
        <h2 className="card-title">석식</h2>
        <div>
          <ul>
            {src.dinner?.map((menu) => (
              <li key={menu}>
                <span>{menu}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="justify-end card-actions">
          <div className="badge badge-ghost">{src.dinnerTime}</div>
        </div>
      </div>
    </div>
  );
}
