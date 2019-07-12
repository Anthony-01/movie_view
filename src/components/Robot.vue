<template>
    <div>
        <label for="">what's your problem?</label>
        <input type="text" v-model="question">
        {{answer}}
    </div>
    
</template>
<script>
export default {
    data () {
        return {
            question: "",
            answer: "等待提问中..."
        }
    },
    watch: {
        question: function() {
            this.answer = "等待..."
            this.getAnswer();
        }
    },
    methods: {
        getAnswer: function() {
            if (this.question.indexOf('？') != -1) {
                this.answer = "思考中";
                this.$http.post("http://robottest.uneedzf.com/api/talk2Robot",{token: '26a33097ea15fceec8f37ed754c368cf', message: this.question}).then((res) => {
                    if (res.data.code == 0) {
                        this.answer = res.data.data;
                    } else {
                        this.answer = res.data.message;
                    }
                })
            } else {
                this.answer = "提问必须以\‘?\’结尾";
            }
        }
    }
}
</script>

