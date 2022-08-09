class Modal{
    constructor(submitFuncton) {
        this._modalElement = document.createElement('div');
        this._modalBackgroundContainer = document.createElement('div');
        this._modalMainContainer = document.createElement('div');
        this._modalCloseBtn = document.createElement('button');
    }

    createNode() {
        this._modalElement.className = 'modal';
        this._modalBackgroundContainer.className = 'modal__background';
        this._modalBackgroundContainer.addEventListener('click', this.deleteNode.bind(this));
        this._modalMainContainer.className = 'modal__main-container flex-column';
        this._modalCloseBtn.className = 'modal__close-btn flex-column';
        this._modalCloseBtn.innerText = 'X';
        this._modalCloseBtn.addEventListener('click', this.deleteNode.bind(this));
        this._modalBackgroundContainer.append(this._modalMainContainer);
        this._modalElement.append(this._modalBackgroundContainer);
    }

    deleteNode(){
        this._modalElement.remove();
    }

    render(){
        this.createNode();
        document.body.append(this._modalElement);
    }
}


export default Modal