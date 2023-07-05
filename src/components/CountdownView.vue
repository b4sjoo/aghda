<template>
<div id="clock">
    <p class="date">Register will open on {{ countDownToTime }}</p>
    <p class="time">{{ time }}</p>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'CountdownView',
  data() {
        return {
            countDownToTime: "Jul 8, 2023 02:20:00",
            time: ''
        };
    },
    methods: {
        startTimer: function() {
            const timeNow = new Date().getTime();
            const timeDifference = new Date(this.countDownToTime).getTime() - timeNow;
            const millisecondsInOneSecond = 1000;
            const millisecondsInOneMinute = millisecondsInOneSecond * 60;
            const millisecondsInOneHour = millisecondsInOneMinute * 60;
            const millisecondsInOneDay = millisecondsInOneHour * 24;
            const differenceInDays = timeDifference / millisecondsInOneDay;
            const remainderDifferenceInHours = (timeDifference % millisecondsInOneDay) / millisecondsInOneHour;
            const remainderDifferenceInMinutes = (timeDifference % millisecondsInOneHour) / millisecondsInOneMinute;
            const remainderDifferenceInSeconds = (timeDifference % millisecondsInOneMinute) / millisecondsInOneSecond;
            const remainingDays = Math.floor(differenceInDays);
            const remainingHours = Math.floor(remainderDifferenceInHours);
            const remainingMinutes = Math.floor(remainderDifferenceInMinutes);
            const remainingSeconds =Math.floor(remainderDifferenceInSeconds);
            this.time = remainingDays + "d " + remainingHours + "h " + remainingMinutes + "m "+ remainingSeconds + "s";
        }
        },
    mounted() {
       setInterval(() => { this.startTimer() }, 1000);
    }
    }
    );
</script>

<style scoped>
p {
    margin: 0;
    padding: 0;
}
#clock {
    font-family: 'Share Tech Mono', monospace;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #0f52ba;
    text-shadow: 0 0 20px rgba(10, 175, 230, 1),  0 0 20px rgba(10, 175, 230, 0);
    .time {
        letter-spacing: 0.05em;
        font-size: 80px;
        padding: 5px 0;
    }
    .date {
        letter-spacing: 0.1em;
        font-size: 24px;
    }
    .text {
        letter-spacing: 0.1em;
        font-size: 12px;
        padding: 20px 0 0;
    }
}
</style>
