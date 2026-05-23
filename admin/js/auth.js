import { auth, onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from './firebase-config.js';

/**
 * Checks auth state. Returns the user if authenticated, or null if not.
 * Handles redirects automatically.
 * @param {boolean} requireAuth - If true, redirects to login when not authenticated.
 */
export function initAuth(requireAuth = true) {
    return new Promise(async (resolve, reject) => { // Made the callback async
        const currentPath = window.location.pathname;
        const isLoginPage = currentPath.endsWith('login.html');

        // Apply persistence *before* checking auth state for faster re-authentication
        try {
            await setPersistence(auth, browserLocalPersistence);
        } catch (error) {
            console.error("Error setting Firebase persistence:", error);
            // This might happen if third-party cookies are blocked.
        }

        // Fallback timeout in case browser blocks storage access
        const timeout = setTimeout(() => {
            console.warn('initAuth timed out. Browser might be blocking storage or persistence failed.');
            resolve(null);
        }, 5000);

        onAuthStateChanged(auth, (user) => {
            clearTimeout(timeout);
            if (user) {
                // ✅ User is logged in
                if (isLoginPage) {
                    // On login page → redirect to dashboard
                    window.location.replace('index.html');
                    return;
                }
                // Set user email in sidebar if element exists
                const emailEl = document.getElementById('admin-user-email');
                if (emailEl) emailEl.textContent = user.email;

                resolve(user);
            } else {
                // ❌ No user signed in
                if (requireAuth && !isLoginPage) {
                    // Protected page → redirect to login
                    window.location.replace('login.html');
                    return;
                }
                resolve(null);
            }
        }, (err) => {
            clearTimeout(timeout);
            reject(err);
        });
    });
}

/**
 * Wires up the logout button.
 */
export function setupLogout() {
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                await signOut(auth);
                window.location.replace('login.html');
            } catch (error) {
                console.error('Error signing out:', error);
                alert('Error signing out. Please try again.');
            }
        });
    }
}
