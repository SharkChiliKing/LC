// importAllTsModules.js
const glob = require("glob");
const path = require("path");
const fs = require("fs/promises"); // 使用fs的promises API来支持async/await

/**
 * 异步地导入指定目录下所有`.ts`或`.tsx`文件的默认导出
 * @param {string} pattern - 匹配`.ts`或`.tsx`文件的glob模式
 * @returns {Promise<Map<string, any>>} - 包含文件路径和对应模块的Map
 */
async function importAllTsModules(pattern) {
  // 使用glob查找所有匹配的文件
  const files = await new Promise((resolve, reject) => {
    glob(pattern, (err, res) => {
      if (err) reject(err);
      else resolve(res);
    });
  });

  const modules = new Map();

  // 异步遍历所有文件，并动态导入每个模块
  for (const file of files) {
    const filePath = path.resolve(file); // 获取文件的绝对路径
    try {
      const moduleExports = await import(filePath); // 动态导入模块
      modules.set(filePath, moduleExports); // 存储模块
    } catch (error) {
      console.error(`无法导入模块 ${filePath}: ${error}`);
    }
  }

  return modules;
}

module.exports = importAllTsModules;
