import { Staff } from "@/types/store";

type Props = {
  staff: Staff;
};

export default function StaffRealTimeLunch({ staff }: Props) {
  return (
    <div className="w-4/5 m-auto mt-4 shadow-xl card bg-base-100">
      <div className="card-body">
        <h2 className="card-title">중식</h2>
        <div>
          <ul>
            {staff.lunch?.map((menu) => (
              <li key={menu}>
                <span>{menu}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="justify-end card-actions">
          <div className="badge badge-ghost">{staff.time}</div>
        </div>
      </div>
    </div>
  );
}
