import Vue from 'vue'
import Buildpacks from '@/components/Buildpacks'
import router from '@/router'

describe('Buildpacks.vue', () => {
  it('should render list', () => {
    const Constructor = Vue.extend(Buildpacks)
    Constructor.router = router

    const vm = new Constructor({ router: router }).$mount()
    expect(vm.$el.querySelector('ul').textContent)
      .to.equal('go ruby')
  })
})
