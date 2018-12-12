<template>
<div>
	<button class="reset">Reset localStorage</button>
	<golden-layout class="hscreen">
		<div slot="stackCtr" class="test-template">
			Added item
			<button>Remove</button>
			Hey patrick
		</div>
		<template slot="bottom">
			Bottom
		</template>
		<gl-col :closable="false">
			<gl-router>
				<gl-route name="r-a" />
				<template slot="route">
				</template>
			</gl-router>
			<gl-row :closable="false">
				<gl-component title="compA" class="test-component">
					<h1>CompA</h1>
					<button>Toggle</button>
					<button>Add</button>
					<p>
            test component
					</p>
				</gl-component>
				<gl-dstack ref="myStack" dstack-id="dynamics">
					<gl-component title="Dstack demonstration" :closable="false" :reorder-enabled="false">
						This element is just present to test the ability of the d-stack if this stack happens to be popped out.
					</gl-component>
				</gl-dstack>
			</gl-row>
			<gl-component template="bottom"  />
		</gl-col>

    <gl-row>
      test
    </gl-row>

    <gl-dstack dstack-id="stack2">
      test2
    </gl-dstack>

      <gl-router>
				<gl-route name="r-a" />
				<template slot="route">
				</template>
			</gl-router>
	</golden-layout>
</div>
</template>
