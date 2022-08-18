import './Button.css';

class ButtonComponent{
    render() {
        const button = document.createElement('button');
        // button.labels = 'Button';
        button.innerHTML = 'Button';
        button.classList.add('button-class')
        button.onclick = () => {
            const p = document.createElement('p');
            p.innerText = 'Hello Ankit Sir';
            p.classList.add('text-class');
            const body = document.querySelector('body');
            body.appendChild(p);
        }
        const body = document.querySelector('body');
        body.appendChild(button);
    }
}

export default ButtonComponent;