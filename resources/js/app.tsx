import { createRoot } from 'react-dom/client';
import '../css/app.css';
import { ComponentType } from 'react';

(async () => {
    const element = document.getElementById('app');

    if (element === null) {
        console.log("No app react wrapper");
        return;
    }

    const componentName = element.dataset.component || "Users";

    const key = `./Components/${componentName}/${componentName}.tsx`;

    const modules = import.meta.glob('./Components/*/*.tsx');

    const loader = modules[key];

    if (!loader) throw new Error(`Componente não encontrado: ${key}`);
    const mod = await loader() as any;
    const Component = (mod.default ?? mod[componentName]) as ComponentType;

    createRoot(element).render(<Component />);
})();