let videoURL = "";
const correctPassword = "12345"; // كلمة السر
let attempts = 0;

// زر توليد رابط التحميل
document.getElementById("generateLinkBtn").onclick = () => {
    const file = document.getElementById("videoUpload").files[0];
    if (!file) {
        alert("يرجى رفع فيديو أولا");
        return;
    }

    videoURL = URL.createObjectURL(file);

    document.getElementById("downloadLink").href = videoURL;
    document.getElementById("downloadSection").style.display = "block";

    // بعد الضغط على التحميل → تظهر كلمة السر
    document.getElementById("downloadLink").onclick = () => {
        document.getElementById("passwordSection").style.display = "block";
    };
};

// زر التحقق من كلمة السر
document.getElementById("checkBtn").onclick = () => {
    const input = document.getElementById("passwordInput").value;
    attempts++;

    if (input === correctPassword) {
        const msg = document.getElementById("welcomeMessage");
        msg.style.display = "block";

        setTimeout(() => {
            msg.style.display = "none";
        }, 5000);

        attempts = 0; // إعادة المحاولات
    } else {
        alert("كلمة السر خاطئة!");

        if (attempts >= 3) {
            alert("تم تعطيل المحاولة بعد 3 محاولات!");
            document.getElementById("checkBtn").disabled = true;
        }
    }
};
