define(() => {
    class Component {
        constructor() {}
        toString() {
            return this.render();
        }
        render() {}
        afterRender() {
        }
    }
    return Component;
});
