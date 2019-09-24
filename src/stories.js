import { storiesOf } from "@storybook/vue"


storiesOf('Buttons', module).add('test button', () => ({
    data() {
        return {
            item: { id: 10, text: 'This is a test' }
        }
    },
    template: '<test></test>'
}))