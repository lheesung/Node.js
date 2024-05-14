const {
  isMainThread,
  Worker,
  parentPort,
  workerData,
} = require("worker_threads");

if (isMainThread) {
  // main thread
  const threads = new Set();
  threads.add(
    new Worker(__filename, {
      workerData: { start: 1 },
    })
  );

  threads.add(
    new Worker(__filename, {
      workerData: { start: 2 },
    })
  );
  for (let worker of threads) {
    worker.on("message", (value) => console.log("from worker: ", value));
    worker.on("exit", () => {
      threads.delete(worker);
      if (threads.size === 0) {
        console.log("worker finished");
      }
    });
  }

  const worker = new Worker(__filename, { workerData: { start: 3 } });
  worker.on("message", (value) => console.log("from worker: ", value));
  worker.on("exit", () => console.log("worker finished"));
  worker.postMessage("heeee");
} else {
  // worker thread
  const data = workerData;
  parentPort.postMessage(data.start + 100);
}
