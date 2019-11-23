import Vue from "vue"
import vue2Dropzone from 'vue2-dropzone'
import 'vue2-dropzone/dist/vue2Dropzone.min.css'
import VModal from 'vue-js-modal'

export default {
    name: 'app',
    components: {
        vueDropzone: vue2Dropzone
    },
    data() {
        return {
            dropzoneOptions: {
                url: '/api/upload',
                thumbnailWidth: 150,
                maxFilesize: 5,
                headers: { "My-Awesome-Header": "header value" }
            },
        }
    },
    methods: {
        success(file, response) {
            this.$modal.show('dialog', {
                title: 'File uploaded successfully',
                text: `File is accessible via URL <a href="/upload/${response}">${response}</a>`,
            })
        }
    },
    beforeCreate() {
        Vue.use(VModal, { dialog: true })
    },
    render() {
        return (
            <div>
                <v-dialog />
                <vue-dropzone
                    ref="myVueDropzone"
                    id="dropzone"
                    options={{ ...this.dropzoneOptions }}
                    on-vdropzone-success={this.success}
                />
            </div>
        )
    },
}