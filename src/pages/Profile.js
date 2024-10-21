import { useEffect, useState } from "react";

export default function Profile() {
    const [profileData, setProfileData] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const users = ["asmaraniii", "salsaar12", "AzrielFM", "erutm"];

    const fetchProfileData = (username) => {
        fetch(`https://api.github.com/users/${username}`)
            .then((response) => response.json())
            .then((data) => setProfileData(data))
            .catch((error) => console.error("Error fetching profile:", error));
    };

    useEffect(() => {
        fetchProfileData(users[currentIndex]);
    }, [currentIndex]);

    const handleNext = () => {
        if (currentIndex < users.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", height: "100vh", padding: "20px", backgroundColor: "#282c34" }}>
            <h1 style={{ color: "white", marginBottom: "20px" }}>User Profile</h1>

            {profileData && (
                <div style={{ backgroundColor: "#fff", borderRadius: "10px", padding: "20px", boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", width: "300px", textAlign: "center" }}>
                    <a href={profileData.html_url} target="_blank" rel="noopener noreferrer">
                        <img src={profileData.avatar_url} alt="GitHub Avatar" width="150" style={{ borderRadius: "50%", marginBottom: "20px" }} />
                    </a>
                    <div style={{ color: "black", textAlign: "center" }}>
                        <p><strong>Nama:</strong> {profileData.name || "N/A"}</p>
                        <p><strong>Followers:</strong> {profileData.followers}</p>
                        <a href={profileData.html_url} target="_blank" rel="noopener noreferrer" style={{ color: "black", textDecoration: "none" }}> {/* Mengubah warna menjadi hitam */}
                            Github Profile
                        </a>
                    </div>
                </div>
            )}

            {!profileData && (
                <p style={{ color: "white", textAlign: "center" }}>Loading profile...</p>
            )}

            {/* Tombol Navigasi dengan jarak */}
            <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
                <button onClick={handlePrev} disabled={currentIndex === 0}>Sebelumnya</button>
                <button onClick={handleNext} disabled={currentIndex === users.length - 1}>Selanjutnya</button>
            </div>
        </div>
    );
}
