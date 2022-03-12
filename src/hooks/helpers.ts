import { createGlobalState, useDark } from '@vueuse/core'

export const generateHTML = (
  payload: Record<string, any>,
  isDark?: boolean
) => {
  return `<html class="${isDark ? 'dark' : ''}">
        <head>
            <style id="_style">${payload.css}</style>
            <script type="module" id="_script">
                ${payload.javascript}

                window.addEventListener('message', function(event) {
                    console.log(event)
                    if (event.data === 'theme-dark') {
                        document.documentElement.classList.add('dark')
                    } else if (event.data === 'theme-light') {
                        document.documentElement.classList.remove('dark')
                    }
                })
            </\script>
        </head>
        <body>
            ${payload.html}
        </body>
    </html`
}

export const useDarkGlobal = createGlobalState(() => useDark())

export const initialEditorValue = {
  html: '<section> <h2>Welcome to <span>VEditor</span> </h2> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at recusandae animi, aut facilis excepturi ducimus, voluptas iure vero molestias minima non doloremque velit debitis temporibus, illo voluptatum? Reiciendis, autem?</p></section>',
  javascript: '',
  css: '*{padding:0;margin:0}section{display:flex;flex-direction:column;align-items:center}h2{margin:1rem 0;color:coral}h2 span{color:#87ceeb}p{color:gray;font-size:1rem;padding:0 5px}',
}
