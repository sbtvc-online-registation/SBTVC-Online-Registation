
        // Simple page navigation simulation
        document.querySelectorAll('a[href^="#program"]').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const programId = this.getAttribute('href').substring(1);
                alert(`กำลังนำท่านไปยังหน้าสมัครเรียนสาขา ${this.querySelector('h3').textContent}`);
                // In a real application, this would navigate to the program's registration page
                // window.location.href = `/register/${programId}`;
            });
        });

        // Add scroll animations
        document.addEventListener('DOMContentLoaded', function() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

    
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'960770c17266271d',t:'MTc1MjczMTIwMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
