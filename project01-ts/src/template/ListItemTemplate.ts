import FullList from "../model/FullList";

interface DOMList {
    ul: HTMLUListElement
    clear(): void,
    render(fullList: FullList):void
}

export default class ListTemplate implements DOMList{

    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate()

    private constructor(){
        this.ul = document.getElementById("listItems") as HTMLUListElement

    }

    clear(): void {
        this.ul.innerHTML = ''
    }

    render(fullList: FullList): void {
        this.clear()

        fullList.list.forEach(item =>{

            const li = document.createElement('li') as HTMLLIElement
            li.className = 'item'
    
            const checkBox = document.createElement('input') as HTMLInputElement
            checkBox.type = "checkbox"
            checkBox.id = item.id
            checkBox.tabIndex = 0
            checkBox.checked = item.checked
            li.append(checkBox)

            checkBox.addEventListener('change', () =>{
                item.checked = !item.checked
                fullList.save()
            })


            const label = document.createElement('label') as HTMLLabelElement

            label.htmlFor = item.id
            label.innerHTML = item.item
            li.append(label)


            const btn = document.createElement('button') as HTMLButtonElement

            btn.textContent = 'X'
            btn.className = 'button'
            li.append(btn)

            btn.addEventListener('click', () =>{
                fullList.removeItem(item.id)
                this.render(fullList)
            })


            this.ul.append(li)

        }) 
       



        
    }


}