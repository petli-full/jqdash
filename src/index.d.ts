declare module "jqdash" {
    function jq(input: string, query: string, options: string[] | null): Promise<string>;
}