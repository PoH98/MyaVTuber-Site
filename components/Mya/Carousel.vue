<template>
    <div class="card-carousel" @mouseover="stopTimer" @mouseleave="restartTimer">
        <div class="progressbar" v-if="autoSlideInterval && showProgressBar">
            <div :style="{ width: progressBar + '%' }"></div>
        </div>
        <v-row class="ma-0">
            <v-col class="pa-1" cols="12" md="8" lg="9">
                <div class="card-img">
                    <iframe ref="iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" type="text/html"
                        class="full-frame" allowfullscreen
                        :src="'https://www.youtube-nocookie.com/embed/' + currentImage + '?rel=0&autoplay=1'"></iframe>
                    <div class="actions" v-if="actions">
                        <span @click="prevImage" class="prev">
                            &#8249;
                        </span>
                        <span @click="nextImage" class="next">
                            &#8250;
                        </span>
                    </div>
                </div>
            </v-col>
            <v-col class="pa-1" cols="12" md="4" lg="3">
                <div class="thumbnails">
                    <div v-for="(image, index) in images" :key="image.Thumbnail"
                        :class="['thumbnail-image', (activeImage == index) ? 'active' : '']" @click="activateImage(index)">
                        <v-img class="img-preview" :lazy-src="'https://www.mya-hkvtuber.com/img/' +
                            image.Thumbnail +
                            '.jpg?height=155&format=jpg'
                            " :src="'https://www.mya-hkvtuber.com/img/' +
        image.Thumbnail +
        '.jpg?height=155&format=jpg'
        " />
                        <p>
                            {{ image.Title }}
                        </p>
                    </div>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
export default {
    name: 'Carousel',
    data() {
        return {
            //Index of the active image
            activeImage: 0,
            //Hold the timeout, so we can clear it when it is needed
            autoSlideTimeout: null,
            //If the timer is stopped e.g. when hovering over the carousel
            stopSlider: false,
            //Hold the time left until changing to the next image
            timeLeft: 0,
            //Hold the interval so we can clear it when needed
            timerInterval: null,
            //Every 10ms decrease the timeLeft
            countdownInterval: 10
        }
    },
    computed: {
        // currentImage gets called whenever activeImage changes
        // and is the reason why we don't have to worry about the 
        // big image getting updated
        currentImage() {
            this.timeLeft = this.autoSlideInterval;
            return this.images[this.activeImage].Thumbnail;
        },
        progressBar() {
            //Calculate the width of the progressbar
            return 100 - (this.timeLeft / this.autoSlideInterval) * 100;
        }
    },
    methods: {
        // Go forward on the images array 
        // or go at the first image if you can't go forward
        nextImage() {
            var active = this.activeImage + 1;
            if (active >= this.images.length) {
                active = 0;
            }
            this.activateImage(active);
        },
        // Go backwards on the images array 
        // or go at the last image
        prevImage() {
            var active = this.activeImage - 1;
            if (active < 0) {
                active = this.images.length - 1;
            }
            this.activateImage(active);
        },
        activateImage(imageIndex) {
            this.activeImage = imageIndex;
        },
        //Wait until 'interval' and go to the next image;
        startTimer(interval) {
            if (interval && interval > 0 && !this.stopSlider) {
                var self = this;
                clearTimeout(this.autoSlideTimeout);
                this.autoSlideTimeout = setTimeout(function () {
                    self.nextImage();
                    self.startTimer(self.autoSlideInterval);
                }, interval);
            }
        },
        //Stop the timer when hovering over the carousel
        stopTimer() {
            clearTimeout(this.autoSlideTimeout);
            this.stopSlider = true;
            clearInterval(this.timerInterval);
        },
        //Restart the timer(with 'timeLeft') when leaving from the carousel
        restartTimer() {
            this.stopSlider = false;
            clearInterval(this.timerInterval);
            this.startCountdown();
            this.startTimer(this.timeLeft);
        },
        //Start countdown from 'autoSlideInterval' to 0
        startCountdown() {
            if (!this.showProgressBar) return;
            var self = this;
            this.timerInterval = setInterval(function () {
                self.timeLeft -= self.countdownInterval;
                if (self.timeLeft <= 0) {
                    self.timeLeft = self.autoSlideInterval;
                }
            }, this.countdownInterval);
        }
    },
    created() {
        //Check if startingImage prop was given and if the index is inside the images array bounds
        if (this.startingImage
            && this.startingImage >= 0
            && this.startingImage < this.images.length) {
            this.activeImage = this.startingImage;
        }

        //Check if autoSlideInterval prop was given and if it is a positive number
        if (this.autoSlideInterval
            && this.autoSlideInterval > this.countdownInterval) {
            //Start the timer to go to the next image
            this.startTimer(this.autoSlideInterval);
            this.timeLeft = this.autoSlideInterval;
            //Start countdown to show the progressbar
            this.startCountdown();
        }
    },
    props: {
        actions: {
            type: Boolean,
            default: () => false
        },
        images: {
            type: Array,
            required: true
        },
        autoSlideInterval: {
            type: [Number, Boolean],
            default: () => false
        },
        showProgressBar: {
            type: Boolean,
            default: () => false
        },
        startingImage: {
            type: [Number, Boolean],
            default: () => false
        }
    }
}
</script>


<style scoped>
.card-carousel {
    user-select: none;
    position: relative;
}

.progressbar {
    display: block;
    width: 100%;
    height: 5px;
    position: absolute;
    background-color: rgba(221, 221, 221, 0.25);
    z-index: 1;
}

.progressbar>div {
    background-color: rgba(255, 255, 255, 0.52);
    height: 100%;
}

.thumbnails {
    display: flex;
    flex-direction: column;
    max-height: calc(100vh - 390px);
    overflow: auto;
}

.thumbnail-image {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 2px;
}

.thumbnail-image>img {
    width: 100%;
    height: auto;
    transition: all 250ms;
}

.thumbnail-image:hover>img,
.thumbnail-image.active>img {
    opacity: 0.6;
    box-shadow: 2px 2px 6px 1px rgba(0, 0, 0, 0.5);
}


.full-frame {
    position: absolute;
    inset: 10px;
    width: calc(100% - 20px);
    height: 100%;
    border: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

.img-preview {
    min-height: 155px;
    width: calc(100% - 8px);
    margin: 4px;
}

.card-img {
    position: relative;
    margin-bottom: 15px;
    height: 100%;
    width: 100%;
}

.card-img>img {
    display: block;
    margin: 0 auto;
}

.actions {
    font-size: 1.5em;
    height: 40px;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #585858;
}

.actions>span {
    cursor: pointer;
    transition: all 250ms;
    font-size: 45px;
}

.actions>span.prev {
    margin-left: 5px;
}

.actions>span.next {
    margin-right: 5px;
}

.actions>span:hover {
    color: #eee;
}
</style>