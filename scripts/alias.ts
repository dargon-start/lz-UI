/*
 * @Author: longzai longzai.com
 * @Date: 2025-03-27 09:30:49
 * @LastEditors: longzai longzai.com
 * @LastEditTime: 2025-03-27 09:35:25
 * @FilePath: \lz-UI\scripts\alias.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import * as path from 'path'
import * as fsPromises from 'fs/promises'
import {Alias} from 'vite'

export function packagesPath () {
  return path.resolve(__dirname, '../packages')
}

export async function alias (): Promise<Array<Alias>> {
  const projectPath = packagesPath()
  const dirArr = await fsPromises.readdir(projectPath)

  return dirArr.map(packagePath => {
    return {
      find:  new RegExp(`^@much-more\\/vc-${packagePath}(\\/(dist))?$`),
      replacement: path.join(projectPath, `/${packagePath}/index`)
    }
  })
}
