<template>
<div id="app">
	<button class="reset" @click="reset">Reset localStorage</button>
	<golden-layout class="hscreen" v-model="state" @sub-window="subWindow">
		<div slot="stackCtr" slot-scope="{ stackSub }" class="test-template">
			Added item (id: {{stackSub}})
			<button @click="remStack(stackSub)">Remove</button>
			Hey patrick
		</div>
		<div slot="bottom">
			Bottom
		</div>
		<gl-col :closable="false">
			<gl-router>
				<gl-route name="r-a" />
				<template slot="route" slot-scope="{ meta }">
					<p-head :title="meta.title" />
					<main />
				</template>
			</gl-router>
			<gl-row :closable="false">
				<gl-component title="compA" class="test-component">
					<h1>CompA</h1>
					<button @click="bottomSheet = !bottomSheet">Toggle</button>
					<button @click="addStack">Add</button>
					<p>
						<span v-for="l in letters" :key="l">
							<router-link :to="`/${l}`">test-{{l}}</router-link>&nbsp;
						</span>
					</p>
				</gl-component>
				<gl-dstack ref="myStack" dstack-id="dynamics">
					<gl-component title="Dstack demonstration" :closable="false" :reorder-enabled="false">
						This element is just present to test the ability of the d-stack if this stack happens to be popped out.
					</gl-component>
					<gl-component v-for="stackSub in stackSubs" :key="stackSub"
						:title="'dynamic'+stackSub"
						@destroy="closed(stackSub)"
						template="stackCtr" :state="{stackSub}" />
				</gl-dstack>
			</gl-row>
			<gl-component v-if="bottomSheet" template="bottom" @destroy="bottomSheet = false" />
		</gl-col>
	</golden-layout>
</div>
</template>
<style>
body {
	overflow: hidden; 	/* The 'light' theme let a scroll-bar on the right of the main container */
}
.hscreen {
	width: 100vw;
	height: 100vh;
}
.reset {
	position: absolute;
	bottom: 0;
	right: 0;
	float: right;
	z-index: 9000;
}
.reset:hover {
	background-color: red;
}
</style>
<script>
import {letters} from '../router.js'
import {Persistance} from 'vue-storage-decorator'
import PHead from '@/golden-layout/p-head.vue'

const Persist = Persistance('browserGL');
export default {
    name: 'test',
    data: function() {
        console.log("hello patrick we are running the test app")
        var obj = {
            bottomSheet: false,
            stackSubs: [1],
            ssId: 1,
            state: null,
            letters: letters
        };
        return obj;
        
    },
    components: {
        PHead
    },
    methods: {
        subWindow: function(is) {
            Persist.persisting = !is;
        },
        reset: function(){
            delete localStorage.browserGL;
            location.reload();
        },
        closed: function(n){
            var ndx = this.stackSubs.indexOf(n);
            console.assert(!!~ndx, 'Element in state array');
            this.stackSubs.splice(ndx, 1);
        },
        addStack() {
            this.stackSubs.push(++this.ssId);
        },
        remStack(id) {
            var ndx = this.stackSubs.indexOf(id);
            if(~ndx){
                this.stackSubs.splice(ndx, 1);
            }
        }
    }
}
</script>