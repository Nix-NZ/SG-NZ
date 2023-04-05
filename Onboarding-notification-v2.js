window.onload = function () {
    document.addEventListener('DOMContentLoaded', function () {
        const banner = document.querySelector('.notification-banner-onboarding');
        const statusElement = document.querySelector('.onboarding-status');

        if (banner && statusElement) {
            const onboardingCompleted = statusElement.textContent.trim() === 'Yes';

            if (onboardingCompleted) {
                banner.style.display = 'none';
            }
        } else {
            console.error('Could not find either the Notification-banner-onboarding or onboarding-status element');
        }
    });
};