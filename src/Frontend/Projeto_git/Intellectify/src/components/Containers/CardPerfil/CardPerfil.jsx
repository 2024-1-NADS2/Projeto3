import ProfileMold from '../../ImagemMold/ProfileMold'
import './ProfileCard.css'; // Optional: for styling

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <div className="profile-card-header">
        <ProfileMold />
      </div>
      <div className="profile-card-body">
        <div className="profile-info">
          <h2>Fernanda Lopes Santos</h2>
          <p>@Fer_santos</p>
          <p>São Paulo, São Paulo, Brasil</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;