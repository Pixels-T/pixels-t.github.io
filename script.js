        function copyCode(btn) {
            const codeLines = document.querySelectorAll('#code-content .code-line');
            let text = '';
            codeLines.forEach(line => {
                const content = line.querySelector('span:not(.line-number)');
                if (content) {
                    text += content.innerText + '\n';
                } else {
                    text += '\n';
                }
            });
            navigator.clipboard.writeText(text.trim()).then(() => {
                const original = btn.innerHTML;
                btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg> Copied!';
                btn.classList.add('copied');
                setTimeout(() => {
                    btn.innerHTML = original;
                    btn.classList.remove('copied');
                }, 2000);
            });
        }