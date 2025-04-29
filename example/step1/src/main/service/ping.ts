// ping www.baidu.com
export async function ping(url = 'www.baidu.com') {
    // 从 Node.js 的 child_process 模块中导入 exec 函数
    const { exec } = require('child_process');

    // 异步操作的返回对象 - Promise
    // 标准机制 resolve 和 reject
    // resolve 成功的回调函数
    // reject 失败的回调函数
    return new Promise((resolve, reject) => {
        exec(`ping -c 1 ${url}`, (error, stdout, stderr) => {
            // 命令失败
            if (error) {
                console.error(`Error executing ping: ${error.message}`);
                reject(error);
            } 
            // 命令成功但有错误输出
            else if (stderr) {
                console.error(`Ping error: ${stderr}`);
                reject(new Error(stderr));
            }
            // 命令成功且没有错误输出 
            else {
                console.log(`Ping result: ${stdout}`);
                resolve(stdout);
            }
        });
    });
}

// 从命令行中获取具体的ping值
export async function get_ping_num(url = 'www.baidu.com'): Promise<number> {
    try {
        // 调用已有的ping函数获取完整输出
        const output = await ping(url);
        
        // 使用正则表达式提取平均值
        // macOS/Linux格式: "round-trip min/avg/max/stddev = 39.765/41.219/43.493/1.445 ms"
        // Windows格式: "最小 = 10ms，最大 = 30ms，平均 = 20ms"
        const macLinuxMatch = output.match(/min\/avg\/max(?:\/stddev)?\s*=\s*[\d.]+\/([\d.]+)\/[\d.]+/i);
        const windowsMatch = output.match(/平均\s*=\s*(\d+)ms/i) || output.match(/Average\s*=\s*(\d+)ms/i);
        
        if (macLinuxMatch && macLinuxMatch[1]) {
            return parseFloat(macLinuxMatch[1]);
        } else if (windowsMatch && windowsMatch[1]) {
            return parseFloat(windowsMatch[1]);
        } else {
            throw new Error('无法从ping输出中提取平均值');
        }
    } catch (error) {
        console.error('获取ping平均值失败:', error);
        throw error;
    }
}