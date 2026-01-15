import React from "react";
import { CheckCircle2 } from "lucide-react";
import content from "../config/content";

export default function Status() {
  // Extrai dados de status
  const { status } = content;

  return (
    // Layout de página de status
    <section className="pt-32 pb-20 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden transition-colors">
          {/* Topo Verde */}
          <div className="bg-green-600 p-8 text-white text-center">
            <CheckCircle2 className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h1 className="text-3xl font-bold mb-2">{status.title}</h1>
            <p className="opacity-90">{status.lastCheck}</p>
          </div>

          {/* Lista de sistemas */}
          <div className="divide-y divide-gray-100 dark:divide-gray-800">
            {status.systems.map((sys, idx) => (
              <div
                key={idx}
                className="p-6 flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                <span className="font-medium text-gray-800 dark:text-white transition-colors">
                  {sys.name}
                </span>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400 hidden sm:block transition-colors">
                    {sys.uptime} uptime
                  </span>
                  <span className="flex items-center gap-2 text-green-700 dark:text-green-400 font-semibold text-sm bg-green-50 dark:bg-green-900/30 px-3 py-1 rounded-full border border-green-100 dark:border-green-800 transition-colors">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    {sys.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
