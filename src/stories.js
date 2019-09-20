import { storiesOf } from "@storybook/vue"


storiesOf('test', module).add('TEST', () => ({
    data() {
        return {
            item: { id: 10, text: 'This is a test' }
        }
    },
    template: '<test></test>'
}))