import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { HomeService } from './shared/home.service';

import { User } from '@app/_models';
import { UserService, AuthenticationService } from '@app/_services';

@Component({ 
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.css'],
    providers: [HomeService]
})
export class HomeComponent implements OnInit, OnDestroy {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    toDoListArray: any[];

    constructor(
        private authenticationService: AuthenticationService,
        private userService: UserService,
        private toDoService: HomeService    ) 
        {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
    }

    ngOnInit() {
        this.loadAllUsers();
        this.toDoService.getToDoList().snapshotChanges()
        .subscribe(item => {
            this.toDoListArray = [];
            item.forEach(element => {
                var x  = element.payload.toJSON();
                x["$key"] = element.key;
                this.toDoListArray.push(x);                
            })

            this.toDoListArray.sort((a,b) => {
                return a.isChecked - b.isChecked;
            })
        });
    }

    onAdd(itemTitle) {
        this.toDoService.addTitle(itemTitle.value);
        itemTitle.value = null;
    }

    alterCheck($key: string, isChecked){
        this.toDoService.checkOrUnCheckTitle($key,!isChecked);
    }

    onDelete($key : string){
        this.toDoService.removeTitle($key);
    }

    
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.currentUserSubscription.unsubscribe();
    }

    deleteUser(id: number) {
        this.userService.delete(id).pipe(first()).subscribe(() => {
            this.loadAllUsers()
        });
    }

    private loadAllUsers() {
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });
    }
}