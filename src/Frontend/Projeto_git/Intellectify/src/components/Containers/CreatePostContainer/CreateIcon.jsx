import { HiMiniPlay } from "react-icons/hi2";

const CreateIcon = (onClick) => {

  return (
    <div>
      <HiMiniPlay color="#575757" onClick={onClick} />
    </div>
  );
};

export default CreateIcon;