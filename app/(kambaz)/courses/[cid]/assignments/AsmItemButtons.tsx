import { FaCheckCircle, FaPencilAlt, FaTrash } from "react-icons/fa";
import { BsPlus } from "react-icons/bs";
import { IoEllipsisVertical } from "react-icons/io5";
import { useAsmStore } from "../../../store/assignmentStore";
import Link from "next/link";

// buttons next to a module title
export default function AsmItemButtons({asmId, cid}: {asmId: string, cid: string}) {
  const delAssignment = useAsmStore((state) => state.delAssignment);
  const editAssignment = useAsmStore((state) => state.editAssignment);

  return (
    <div className="flex items-center gap-2">
      <Link href={`/courses/${cid}/assignments/${asmId}`} title="Edit assignment">
        <FaPencilAlt className="cursor-pointer text-blue-600" />
      </Link>
      <FaTrash
        className="cursor-pointer text-red-600"
        onClick={() => delAssignment(asmId)}
        title="Delete module"
      />
      {/*<FaCheckCircle className="text-green-600" />*/}
      <BsPlus className="text-3xl" />
      <IoEllipsisVertical className="text-xl" />
    </div>
  );
}