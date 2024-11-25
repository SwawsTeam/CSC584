// JavaScript to add interaction to the QR code
document.addEventListener("DOMContentLoaded", () => {
    const qrCode = document.getElementById("qrCode");

    qrCode.addEventListener("click", () => {
        alert("Thank you for your interest in donating! Please scan the QR code using your banking or payment app.");
    });

    // Optional: Add hover effect for QR code
    qrCode.addEventListener("mouseenter", () => {
        qrCode.style.transform = "scale(1.1)";
        qrCode.style.transition = "transform 0.3s ease-in-out";
    });

    qrCode.addEventListener("mouseleave", () => {
        qrCode.style.transform = "scale(1)";
    });
});
