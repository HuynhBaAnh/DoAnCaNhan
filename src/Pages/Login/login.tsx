import React from 'react'

export default function Login() {
    return (
        <section className="bg-slate-200 relative grid grid-cols-2">
            <div className="md:col-span-1 col-span-2"></div>
            <div className="md:col-span-1 absolute ">
                <form action="">
                    <label htmlFor="username"></label>
                    <input type="text" id='username' placeholder='User Name' />
                </form>
            </div>
        </section>
    )
}