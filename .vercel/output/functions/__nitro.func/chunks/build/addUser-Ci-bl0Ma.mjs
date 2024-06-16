import { _ as __nuxt_component_4, a as __nuxt_component_5, b as __nuxt_component_6 } from './Input-BDZCRnhR.mjs';
import { b as useToast, c as useRouter, d as __nuxt_component_2$1 } from './server.mjs';
import { defineComponent, reactive, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as addUser } from './user-BOMUv8Fh.mjs';
import '@vueuse/core';
import 'tailwind-merge';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'mongoose';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const resetTempHardWare = () => {
  return $fetch("/api/temp/bin", { method: "POST", body: { code: "" } });
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "addUser",
  __ssrInlineRender: true,
  setup(__props) {
    const init = {
      name: void 0,
      id: void 0,
      gender: void 0,
      email: void 0,
      mobile: void 0,
      code: void 0
    };
    const toast = useToast();
    useRouter();
    const user = reactive(init);
    async function onSubmit(event) {
      addUser(event.data).then((data) => {
        console.log(data);
        Object.assign(user, init);
        toast.add({ title: "Created!" });
      }).catch(() => {
        toast.add({ title: "Not created!", color: "red" });
      }).finally(() => {
        resetTempHardWare();
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UForm = __nuxt_component_4;
      const _component_UFormGroup = __nuxt_component_5;
      const _component_UInput = __nuxt_component_6;
      const _component_UButton = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center h-screen" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UForm, {
        state: unref(user),
        class: "space-y-2 w-full max-w-[800px] m-auto h-1/2",
        onSubmit
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "CODE",
              name: "code"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(user).code,
                    "onUpdate:modelValue": ($event) => unref(user).code = $event,
                    disabled: "",
                    class: "bg-gray-200"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(user).code,
                      "onUpdate:modelValue": ($event) => unref(user).code = $event,
                      disabled: "",
                      class: "bg-gray-200"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "NAME",
              name: "name"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(user).name,
                    "onUpdate:modelValue": ($event) => unref(user).name = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(user).name,
                      "onUpdate:modelValue": ($event) => unref(user).name = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "MOBILE",
              name: "mobile"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(user).mobile,
                    "onUpdate:modelValue": ($event) => unref(user).mobile = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(user).mobile,
                      "onUpdate:modelValue": ($event) => unref(user).mobile = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "GENDER",
              name: "gender"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(user).gender,
                    "onUpdate:modelValue": ($event) => unref(user).gender = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(user).gender,
                      "onUpdate:modelValue": ($event) => unref(user).gender = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UFormGroup, {
              label: "EMAIL",
              name: "email"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_UInput, {
                    modelValue: unref(user).email,
                    "onUpdate:modelValue": ($event) => unref(user).email = $event
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_UInput, {
                      modelValue: unref(user).email,
                      "onUpdate:modelValue": ($event) => unref(user).email = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_UButton, { type: "submit" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Submit `);
                } else {
                  return [
                    createTextVNode(" Submit ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_UFormGroup, {
                label: "CODE",
                name: "code"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(user).code,
                    "onUpdate:modelValue": ($event) => unref(user).code = $event,
                    disabled: "",
                    class: "bg-gray-200"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "NAME",
                name: "name"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(user).name,
                    "onUpdate:modelValue": ($event) => unref(user).name = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "MOBILE",
                name: "mobile"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(user).mobile,
                    "onUpdate:modelValue": ($event) => unref(user).mobile = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "GENDER",
                name: "gender"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(user).gender,
                    "onUpdate:modelValue": ($event) => unref(user).gender = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UFormGroup, {
                label: "EMAIL",
                name: "email"
              }, {
                default: withCtx(() => [
                  createVNode(_component_UInput, {
                    modelValue: unref(user).email,
                    "onUpdate:modelValue": ($event) => unref(user).email = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_UButton, { type: "submit" }, {
                default: withCtx(() => [
                  createTextVNode(" Submit ")
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/addUser.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=addUser-Ci-bl0Ma.mjs.map
