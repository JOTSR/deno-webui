//Preload lib files statically
export {
  //@ts-ignore ejm serve { b64: string }
  default as webui2Windows,
} from "https://ejm.sh/deno.land/x/webui@2.3.0/src/webui-2-x64.dll" assert {
  type: "json",
};
export {
  //@ts-ignore ejm serve { b64: string }
  default as webui2Linux,
} from "https://ejm.sh/deno.land/x/webui@2.3.0/src/webui-2-x64.so" assert {
  type: "json",
};
export {
  //@ts-ignore ejm serve { b64: string }
  default as webui2Darwin,
} from "https://ejm.sh/deno.land/x/webui@2.3.0/src/webui-2-x64.dyn" assert {
  type: "json",
};

export { exists, existsSync } from "https://deno.land/std@0.192.0/fs/mod.ts";
export * as path from "https://deno.land/std@0.192.0/path/mod.ts";
export { default as osPaths } from "https://deno.land/x/os_paths@v7.4.0/src/mod.deno.ts";
