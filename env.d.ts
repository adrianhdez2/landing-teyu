/// <reference path="astro/client" />

interface ImportMetaEnv {
    readonly PUBLIC_KEY: string;
    readonly PUBLIC_SERVICE_ID: string;
    readonly PUBLIC_TEMPLATE_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

