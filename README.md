# Mankai Plugin Template

A template for creating JavaScript plugins for [Mankai](https://github.com/mankai-app/mankai), with an included GitHub Actions build workflow.

## Getting Started

Create a repository from this template, then install dependencies with [Bun](https://bun.sh/) and rename the template directory:

```bash
bun install
mv src/template src/my-plugin
```

Update `src/my-plugin/meta.json` and implement the functions in that directory. Replace the placeholder `repository` and `updatesUrl` values, or remove them to let the build action fill them automatically.

## Development

```bash
bun run dev    # Run src/main.ts in watch mode for local testing
bun run build  # Build plugins into dist/
```

Add your local test code to `src/main.ts`. The build packages each plugin as `dist/<directory>/<plugin-id>.json`.

## Build Action

The included [workflow](.github/workflows/build_and_push.yml) builds plugins on pushes to `master` and publishes them to the `static` branch. Create that branch before the first run, and update the workflow if your default branch has a different name.

The generated README on `static` lists the published plugin URLs.

## Documentation

See the [JavaScript Plugin API documentation](https://mankai.app/api/javascript-plugins/).
