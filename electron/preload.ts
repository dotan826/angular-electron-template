import { contextBridge } from 'electron';

contextBridge.exposeInMainWorld('api', {
  // Add your typed APIs here later
});
